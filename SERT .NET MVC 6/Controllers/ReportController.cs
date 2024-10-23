﻿using Microsoft.AspNetCore.Mvc;
using SertWebApp.Enums;
using SertWebApp.Interfaces;
using SertWebApp.Models;
using SertWebApp.Models.ViewModels;

namespace SertWebApp.Controllers
{
    public class ReportController(ILogger<ReportController> logger, 
                                    IReportManager reportManager, 
                                    ISessionService sessionService, 
                                    IFileInputService fileInputService) 
        : BaseController(sessionService)
    {
        private readonly ILogger<ReportController> _logger = logger;
        private readonly IReportManager _reportManager = reportManager;
        private readonly ISessionService _sessionService = sessionService;
        private readonly IFileInputService _fileInputService = fileInputService;

        public IActionResult ReportList() => View("ReportList");

        private ReportModel GetDetails(int id) => reportManager.GetReportDetails(id);

        [HttpGet]
        public IActionResult Add() => PartialView("_ReportPartial", new ReportViewModel { PageMode = PageMode.Add });

        [HttpGet]
        public IActionResult Edit(int id)
        {
            try
            {
                var report = GetDetails(id);
                if (report == null || !string.IsNullOrEmpty(report.ErrorMessage))
                {
                    return NotFound();
                }

                var viewModel = ConvertToViewModel(report);
                viewModel.PageMode = PageMode.Update;

                return PartialView("_ReportPartial", viewModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportController.Edit(...)");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            try
            {
                var report = GetDetails(id);
                if (report == null || !string.IsNullOrEmpty(report.ErrorMessage))
                {
                    return NotFound();
                }

                var viewModel = ConvertToViewModel(report);
                viewModel.PageMode = PageMode.Delete;

                return PartialView("_ReportPartial", viewModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportController.Edit(...)");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Save(ReportViewModel viewModel, IFormFile? attachment)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (viewModel.PageMode == PageMode.Delete)
                    {
                        _reportManager.Delete(viewModel.Id);
                    }
                    else
                    {
                        if (attachment != null && attachment.Length > 0)
                        {
                            // Check if the file is a PDF or image file
                            if (_fileInputService.IsPdfOrImageFile(attachment))
                            {
                                using var memoryStream = new MemoryStream();
                                attachment.CopyTo(memoryStream);
                                viewModel.Attachment = memoryStream.ToArray();
                                viewModel.FileName = attachment.FileName;
                                viewModel.FileType = attachment.ContentType;
                            }
                            else
                            {
                                return StatusCode(422, "Invalid File Format");
                            }
                        }

                        var report = new ReportModel
                        {
                            Id = viewModel.Id,
                            BuildingName = viewModel.BuildingName,
                            LocationDetail = viewModel.LocationDetail,
                            Content = viewModel.Content,
                            Attachment = viewModel.Attachment,
                            FileName = viewModel.FileName,
                            FileType = viewModel.FileType
                        };

                        _reportManager.Upsert(report);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportController.Save(...)");
                return StatusCode(500, ex.Message);
            }

            return PartialView("_ReportPartial", viewModel);
        }

        #region File handling
        [HttpGet]
        public IActionResult DownloadAttachment(int id)
        {
            try
            {
                var report = GetDetails(id);
                if (report == null || report.Attachment == null || report.Attachment.Length == 0)
                {
                    return NotFound();
                }

                var fileType = report.FileType ?? "application/octet-stream";
                var fileExtension = _fileInputService.GetFileExtensionFromFileType(fileType);
                var fileName = report.FileName ?? $"sert_attachment_{DateTime.Now:MMddyyyyhhmmss}_{id}{fileExtension}";

                return File(report.Attachment, fileType, fileName);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportController.DownloadAttachment(...)");
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult DeleteAttachment(int id)
        {
            try
            {
                var report = GetDetails(id);
                if (report != null)
                {
                    report.Attachment = null;
                    report.FileName = null;
                    report.FileType = null;
                    // Save changes to the database
                    _reportManager.Upsert(report);
                    return Json(new { success = true });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error at ReportController.DeleteAttachment(...)");
                return StatusCode(500, ex.Message);
            }

            return Json(new { success = false });
        }
        #endregion

        #region DataTables
        [HttpPost]
        public IActionResult GetData([FromForm] DataTableParameters parameters)
        {
            try
            {

                var allReports = _reportManager.GetAllReports();

                // Search Filter
                if (!string.IsNullOrEmpty(parameters.Search.Value))
                {
                    var searchValue = parameters.Search.Value.ToLower();
                    allReports = allReports.Where(u => (u.BuildingName != null && u.BuildingName.Contains(searchValue))
                                                    || (u.LocationDetail != null && u.LocationDetail.Contains(searchValue))
                                                    || (u.Content != null && u.Content.Contains(searchValue))).ToList();
                }


                // Sort Column
                var order = parameters?.Order?[0] ?? null;
                var sortDirection = order?.Dir ?? "asc";
                var sortColumn = parameters?.Columns[order?.Column ?? 0]?.Data ?? string.Empty;
                Func<ReportModel, object> orderByFunc = x => x.BuildingName; // default

                if (sortColumn?.Equals("Name", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.LocationDetail ?? string.Empty);
                if (sortColumn?.Equals("Course", StringComparison.CurrentCultureIgnoreCase) ?? false)
                    orderByFunc = (x => x.Content ?? string.Empty);

                // Apply pagination
                var totalRecords = allReports.Count;
                var currentIndex = (((parameters?.Start ?? 0) - 1) * (parameters?.Length ?? 0));
                if (currentIndex <= 0 || (totalRecords > 0 && currentIndex >= totalRecords))
                    currentIndex = 0; // safe checking;

                var filteredReports = allReports;

                if (parameters?.Length > -1)
                {
                    filteredReports = allReports.Skip(currentIndex).Take(parameters?.Length ?? 0).ToList();
                }

                // Order results
                if (sortDirection.Equals("asc", StringComparison.CurrentCultureIgnoreCase))
                    filteredReports = filteredReports.OrderBy(orderByFunc).ToList();
                else
                    filteredReports = filteredReports.OrderByDescending(orderByFunc).ToList();

                var data = filteredReports.Select(ConvertToViewModel).ToList();

                var result = new
                {
                    draw = parameters?.Draw ?? 0,
                    recordsTotal = totalRecords,
                    recordsFiltered = filteredReports.Count,
                    data
                };

                return Json(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching report list.");
                return StatusCode(500, ex.Message);
            }
        }
        #endregion

        private ReportViewModel ConvertToViewModel(ReportModel reportModel)
        {
            return new ReportViewModel
            {
                Id = reportModel.Id,
                BuildingName = reportModel.BuildingName,
                LocationDetail = reportModel.LocationDetail,
                Content = reportModel.Content,
                Attachment = reportModel.Attachment,
                FileName = reportModel.FileName,
                FileType = reportModel.FileType
            };
        }
    }
}