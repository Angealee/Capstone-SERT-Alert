const ROLE_ARRAY = ['No Role', 'User', 'Root Admin', 'Administrator']; // Must be changed with Role.cs (Enum)

$(() => {
    // TODO: Try to style the deleted users as italics when rendering in the table.
    $('#tblUsers').DataTable({
        serverSide: true,
        processing: true,
        search: {
            return: true
        },
        ajax: {
            url: '/User/GetData',
            type: 'POST',
            datatype: 'json',
            dataSrc: function (result) {
                return result.data;
            },
            data: function (d) {
                d.isAdmin = false;
            }
        },
        columns: [
            null,
            { data: 'username', title: 'Username' },
            { data: 'name', title: 'Name' },
            { data: 'course', title: 'Course' },
            { data: 'year', title: 'Year' },
            { data: 'section', title: 'Section' },
            { data: 'position', title: 'Position' },
            { data: 'isOnline', title: 'Status' },
        ],
        columnDefs: [
            {
                targets: '_all',
                className: 'dt-body-center dt-head-center'
            },
            {
                targets: 0,
                data: 'role',
                render: function (data, type, row, meta) {
                    let currentUserId = meta.settings.json.currentUserId;
                    let currentUserRole = meta.settings.json.currentUserRole;

                    // Can be further edited for "View" option
                    //let buttons = `<div class="btn-group">
                    //                    <button class="btn btn-sm btn-secondary btn-view-user" data-user-id="${row.id}">
                    //                        <i class="fa-solid fa-eye"></i>
                    //                    </button>
                    //                </div>`;
                    let buttons = '';
                    switch (currentUserRole) {
                        case 0: // User
                            if (currentUserId === row.id) {
                                buttons = `<div class="btn-group">
                                                <button class="btn btn-sm btn-warning btn-edit-user" data-user-id="${row.id}">
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                            </div>`;
                            }

                            break;
                        case 1: // Root Admin
                        case 2: // Administrator
                            buttons = `<div class="btn-group">
                                            <button class="btn btn-sm btn-warning btn-edit-user" data-user-id="${row.id}">
                                                <i class="fa-regular fa-pen-to-square"></i>
                                            </button>
                                            <button class="btn btn-sm btn-danger btn-delete-user" data-user-id="${row.id}">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>`;
                            break;
                    }

                    return buttons;
                },
                orderable: false,
                searchable: false
            },
            {
                targets: 7,
                data: null,
                render: function (data, type, row, meta) {
                    return data
                        ? `<img src="../images/status-online.svg" width="15" height="15"></img>`
                        : `<img src="../images/status-offline.svg" width="15" height="15"></img>`;
                },
                searchable: false
            },
        ],
        layout: {
            topStart: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-plus"></i>',
                        className: 'btn btn-success btn-sm btn-add-user'
                    }
                ],
                search: {
                    placeholder: 'Search here'
                },

            },
            topEnd: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-download"></i>&nbsp;Download',
                        className: 'btn btn-sm',
                        split: ['pdfHtml5', 'excelHtml5', 'csvHtml5', 'copyHtml5']
                    }
                ],
                pageLength: {
                    menu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
                }
            },
            bottom: null,
            bottomStart: 'paging',
            bottomEnd: 'info'
        }
    });




    $('#tblReports').DataTable({
        serverSide: true,
        processing: true,
        search: {
            return: true
        },
        ajax: {
            url: '/Report/GetData',
            type: 'POST',
            datatype: 'json',
            dataSrc: function (result) {
                return result.data;
            }
        },
        columns: [
            null,
            { data: 'buildingName', title: 'Building' },
            { data: 'locationDetail', title: 'Location' },
            { data: 'content', title: 'Content' },
            { data: 'attachment', title: 'Attachment' }
        ],
        columnDefs: [
            {
                targets: '_all',
                className: 'dt-body-center dt-head-center'
            },
            {
                targets: 0,
                data: null,
                render: function (data, type, row, meta) {
                    return `
                    <div class="btn-group">
                        <button class="btn btn-sm btn-warning btn-edit-report" data-report-id="${row.id}">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="btn btn-sm btn-danger btn-delete-report" data-report-id="${row.id}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    `;
                },
                orderable: false,
                searchable: false
            },
            {
                targets: 3,
                data: 'content',
                render: function (data, type, row, meta) {
                    return type === 'display' && data.length > 50
                        ? '<span title="' + data + '">' + data.substr(0, 48) + '...</span>'
                        : data;
                }
            },
            {
                targets: 4,
                data: 'attachment',
                render: function (data, type, row, meta) {
                    return data != null
                        ? `
                    <a role="button" class="btn-download-attachment" data-report-id="${row.id}"><i class="fa-solid fa-paperclip"></i>
                    `
                        : data;
                }
            },

        ],
        layout: {
            topStart: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-plus"></i>',
                        className: 'btn btn-success btn-sm btn-add-report'
                    }
                ],
                search: {
                    placeholder: 'Search here'
                },

            },
            topEnd: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-download"></i>&nbsp;Download',
                        className: 'btn btn-sm',
                        split: ['pdfHtml5', 'excelHtml5', 'csvHtml5', 'copyHtml5']
                    }
                ],
                pageLength: {
                    menu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
                }
            },
            bottom: null,
            bottomStart: 'paging',
            bottomEnd: 'info'
        }
    });




    $('#tblAdmins').DataTable({
        serverSide: true,
        processing: true,
        search: {
            return: true
        },
        ajax: {
            url: '/User/GetData',
            type: 'POST',
            datatype: 'json',
            dataSrc: function (result) {
                return result.data;
            },
            data: function (d) {
                d.isAdmin = true;
            }
        },
        columns: [
            null,
            { data: 'username', title: 'Username' },
            { data: 'name', title: 'Name' },
            { data: 'position', title: 'Position' },
            { data: 'role', title: 'Role' },
            { data: 'isOnline', title: 'Status' },
        ],
        columnDefs: [
            {
                targets: '_all',
                className: 'dt-body-center dt-head-center'
            },
            {
                targets: 0,
                data: null,
                render: function (data, type, row, meta) {
                    return `
                    <div class="btn-group">
                        <button class="btn btn-sm btn-warning btn-edit-admin" data-admin-id="${row.id}">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="btn btn-sm btn-danger btn-delete-admin" data-admin-id="${row.id}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    `;
                },
                orderable: false,
                searchable: false
            },
            {
                targets: 4,
                data: null,
                render: function (data, type, row, meta) {
                    let roleName = '';


                    switch (data) {
                        case 1:
                            roleName = ROLE_ARRAY[2];
                            break;
                        case 2:
                            roleName = ROLE_ARRAY[3];
                            break;
                        default:
                            roleName = ROLE_ARRAY[0];
                            break;
                    }

                    return roleName;
                },
                searchable: false
            },
            {
                targets: 5,
                data: null,
                render: function (data, type, row, meta) {
                    return data
                        ? `<img src="../images/status-online.svg" width="15" height="15"></img>`
                        : `<img src="../images/status-offline.svg" width="15" height="15"></img>`;
                },
                searchable: false
            },
        ],
        layout: {
            topStart: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-plus"></i>',
                        className: 'btn btn-success btn-sm btn-add-admin'
                    }
                ],
                search: {
                    placeholder: 'Search here'
                },

            },
            topEnd: {
                buttons: [
                    {
                        text: '<i class="fa-solid fa-download"></i>&nbsp;Download',
                        className: 'btn btn-sm',
                        split: ['pdfHtml5', 'excelHtml5', 'csvHtml5', 'copyHtml5']
                    }
                ],
                pageLength: {
                    menu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
                }
            },
            bottom: null,
            bottomStart: 'paging',
            bottomEnd: 'info'
        }
    });
});