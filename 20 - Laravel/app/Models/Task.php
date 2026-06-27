<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;


class Task extends Model
{
    use Sluggable;
    use SoftDeletes;
    protected $table = 'tasks';
    protected $fillable =[
        'title',
        'user_id',
        'priority',
        'status',
        'due_date',
        'project_id',
        'board_column',
        'description',
        'completed',
        'tags',
        'assigned_to',
        'labels'
    ];
    protected $casts = [
        'tags' => 'array',
        'labels' => 'array',
        'completed' => 'boolean',
    ];
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function getRouteKeyName(): string
    {
        return 'slug';
    }
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }

}
?>