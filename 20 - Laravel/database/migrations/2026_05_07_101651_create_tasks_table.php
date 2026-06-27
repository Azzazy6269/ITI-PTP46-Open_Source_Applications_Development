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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('creator');
            $table->string('priority');
            $table->string('status');
            $table->date('due_date');
            $table->integer('project_id');
            $table->string('board_column');
            $table->text('description');
            $table->boolean('completed');
            $table->string('tags');
            $table->string('assigned_to');
            $table->string('labels');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
