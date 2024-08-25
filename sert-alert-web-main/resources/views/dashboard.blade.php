<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="full-height d-flex flex-column">
        <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                </ol>
            </nav>
        </div>

        <div class="content d-flex justify-content-center align-items-center flex-grow-1">
            <div class="center-buttons">
                <a href="" class="btn btn-custom btn-lg">Report History</a>
                <a href="{{ route('sert-management.index') }}" class="btn btn-custom btn-lg">SERT Management</a>
                <a href="{{ route('admin-management.index') }}" class="btn btn-custom btn-lg">Admin Account</a>

            </div>
        </div>
    </div>
</x-app-layout>

<style>
    .full-height {
        min-height: 80vh;
    }

    .content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .btn-custom {
        background-color: #ffffff;
        color: #333333;
        border: 1px solid #dddddd;
        padding: 20px 40px;
        font-size: 1.5em;
        font-weight: 600;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
        text-decoration: none;
    }

    .btn-custom:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        background-color: #f8f9fa;
    }

    .btn-custom:focus, .btn-custom:active {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }

    .btn-lg {
        width: 250px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
