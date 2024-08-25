<?php

namespace App\Http\Controllers;

use App\Models\SertManagement;
use App\Http\Requests\StoreSertManagementRequest;
use App\Http\Requests\UpdateSertManagementRequest;

class SertManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view ('resources.sert-management.index');
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
    public function store(StoreSertManagementRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SertManagement $sertManagement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SertManagement $sertManagement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSertManagementRequest $request, SertManagement $sertManagement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SertManagement $sertManagement)
    {
        //
    }
}
