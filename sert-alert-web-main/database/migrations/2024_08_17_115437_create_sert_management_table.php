<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Creating 'sert_management' table
        Schema::create('sert_management', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });

        // Adding 'position' and 'course_section' columns to 'users' table
        Schema::table('users', function (Blueprint $table) {
            $table->string('position')->nullable(); // Adds 'position' column
            $table->string('course_section')->nullable(); // Adds 'course_section' column
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Dropping 'sert_management' table
        Schema::dropIfExists('sert_management');
        
        // Dropping 'position' and 'course_section' columns from 'users' table
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('position');
            $table->dropColumn('course_section');
        });
    }
};

