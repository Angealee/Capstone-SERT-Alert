<x-app-layout>
    <div class="pagetitle">
        <h1>Admin Management</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}">Home</a>
                </li>
                <li class="breadcrumb-item active">Admin Management</li>
            </ol>
        </nav>
    </div>

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">
                            Admin Management
                            <a href="{{ route('register') }}" type="button" class="btn btn-primary float-end"> Add Admin </a>
                        </h6>

                        <hr />
                        <table class="table datatable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Position</th>
                                    <th>Section</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($admins as $admin)
                                <tr>
                                    <td>{{ $admin->name }}</td>
                                    <td>{{ $admin->email }}</td>
                                    <td>{{ $admin->position }}</td>
                                    <td>{{ $admin->course_section }}</td>
                                    <td>

                                        <a href="{{ route('profile.edit') }}" class="btn btn-success m-1"><i class="bi bi-pencil-square"></i></a>

                                        <button type="button" class="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#deleteModal{{ $admin->id }}"><i class="bi bi-trash"></i></button>

                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-app-layout>
