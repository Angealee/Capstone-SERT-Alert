<?php

namespace App\Http\Controllers;

use App\Models\ReportHistory;
use App\Http\Requests\StoreReportHistoryRequest;
use App\Http\Requests\UpdateReportHistoryRequest;

class ReportHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view ('resources.report-history.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReportHistoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ReportHistory $reportHistory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ReportHistory $reportHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReportHistoryRequest $request, ReportHistory $reportHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReportHistory $reportHistory)
    {
        //
    }
}
