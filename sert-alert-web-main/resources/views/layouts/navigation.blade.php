<aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
        <!-- Dashboard Nav Item -->
        <li class="nav-item">
            <a class="nav-link {{ Request::is('dashboard') ? 'active' : 'collapsed' }}" href="{{ route('dashboard') }}">
                <i class="bi bi-grid"></i>
                <span>{{ __('Dashboard') }}</span>
            </a>
        </li>
        <!-- End Dashboard Nav -->

        <!-- Resources Nav Item -->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#resources-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-calendar-check"></i>
                <span>Report History</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <!-- Resources Submenu -->
            <ul id="resources-nav" class="nav-content collapse {{ Request::is('post*') ? 'show' : '' }}" data-bs-parent="#sidebar-nav">
                <li>
                    <a class="nav-link {{ Request::is('post') ? 'active' : '' }}" href="">
                        <i class="bi bi-circle"></i>
                        <span>Lis</span>
                    </a>
                </li>
            </ul>
        </li>
        <!-- End Resources Nav -->

        <li class="nav-item">
            <a class="nav-link  collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-person-lines-fill"></i>
                <span>SERT Accounts Management</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <a href="forms-elements.html">
                        <i class="bi bi-circle"></i>
                        <span>Form Elements</span>
                    </a>
                </li>
                <li>
                    <a href="forms-layouts.html"> <i class="bi bi-circle"></i><span>Form Layouts</span> </a>
                </li>

            </ul>
        </li>
        <!-- End Forms Nav -->

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-person-lines-fill"></i>
                <span>Admin Accounts Management</span>
                <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <a href="tables-general.html"> <i class="bi bi-circle"></i><span>General Tables</span> </a>
                </li>
                <li>
                    <a href="tables-data.html"> <i class="bi bi-circle"></i><span>Data Tables</span> </a>
                </li>
            </ul>
        </li>
        <!-- End Tables Nav -->
    </ul>
</aside>