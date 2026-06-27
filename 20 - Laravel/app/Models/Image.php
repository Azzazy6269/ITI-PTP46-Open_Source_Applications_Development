<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'images';
    protected $fillable =[
        'task_id',
        'image_path'
    ];

    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id');
    }
}
