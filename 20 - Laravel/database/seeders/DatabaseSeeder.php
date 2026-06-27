<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str; 

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        DB::table('users')->insert([
            [
                'name' => 'Ahmed Mohamed',
                'email' => 'ahmed@example.com',
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sara Ali',
                'email' => 'sara@example.com',
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Omar Khaled',
                'email' => 'omar@example.com',
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Layla Hassan',
                'email' => 'layla@example.com',
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
        $titles = [
            'Fix Login Bug', 'Update UI Colors', 'Write Documentation', 'API Integration',
            'Database Optimization', 'Setup AWS Server', 'Refactor Auth Controller',
            'Email Template Design', 'Payment Gateway Test', 'Mobile Responsive Fix',
            'Add Search Filter', 'Export CSV Feature', 'User Permissions Audit',
            'Implement Dark Mode', 'Optimize Dashboard Widgets', 'Create Notification System',
            'Fix Session Timeout', 'Build Analytics Page', 'Improve Form Validation',
            'Integrate Stripe Payments', 'Create Activity Logs', 'Enhance Security Rules',
            'Deploy Production Build', 'Setup Redis Cache', 'Improve API Performance'
        ];

        $priorities = ['Urgent', 'High', 'Medium', 'Low'];
        $statuses = ['Todo', 'In Progress', 'Done'];
        $columns = ['Backlog', 'Development', 'Testing', 'Documentation'];
        $names = ['Ziad', 'Ahmed', 'Sara', 'Layla', 'Omar'];

        for ($i = 1; $i <= 25; $i++) {
            DB::table('tasks')->insert([
                'title' => $titles[$i-1],
                'slug' => Str::slug($titles[$i-1]), 
                'user_id' => rand(1, 4), 
                'priority' => $priorities[array_rand($priorities)],
                'status' => $statuses[array_rand($statuses)],
                'due_date' => now()->addDays(rand(1, 30))->format('Y-m-d'),
                'project_id' => rand(1, 5),
                'board_column' => $columns[array_rand($columns)],
                'description' => 'Detailed description for task number ' . $i . ' regarding system improvements.',
                'completed' => rand(0, 1),
                'tags' => json_encode(['task', 'sprint-' . rand(1, 5)]),
                'assigned_to' => $names[array_rand($names)],
                'labels' => json_encode(['label-' . rand(1, 3)]),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}