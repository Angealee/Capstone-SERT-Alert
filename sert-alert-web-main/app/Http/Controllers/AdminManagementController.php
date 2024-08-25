<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminManagementController extends Controller
{
    public function index()
    {
        $admins = User::all(); 
        return view('resources.admin-management.index', compact('admins'));
    }
    
}

