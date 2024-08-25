<x-app-layout>
    <div class="pagetitle">
        <h1>Report History</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href=" {{ route('dashboard')}}">Home</a>
                </li>
                <li class="breadcrumb-item active">Report History</li>
            </ol>
        </nav>
    </div>

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">Report History</h6>
                        <p>
                            Add lightweight datatables to your project using the
                            <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a>
                            library. Just add <code>.datatable</code> class name to any table you wish to convert to a datatable. Check for <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">more examples</a>.
                        </p>

                        <table class="table datatable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Course & Section</th>
                                    <th>Year level</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Koby</td>
                                    <td>President</td>
                                    <td>BSIT 3A</td>
                                    <td>Fourth Year</td>
                                    <td>Active now</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-app-layout>
