<?php

use Pagekit\Application as App;
use Pagekit\Blog\Model\Post;

return [

    'name' => 'vision/rbp',

    'label' => 'Recent Blog Posts',

    'events' => [

        'view.scripts' => function($event, $scripts) use ($app) {
            $scripts->register('widget-rbp', 'recent-blog-posts:app/bundle/widget-rbp.js', ['~widgets']);
        }

    ],

    'render' => function($widget) use ($app) {

        $post = Post::where(['status = ?', 'date < ?'], [Post::STATUS_PUBLISHED, new \DateTime])->where(function ($query) {
                return $query->where('roles IS NULL')->whereInSet('roles', App::user()->roles, false, 'OR');
            })->related('user')->limit(1)->orderBy('date', 'DESC')->first();

        if ($post) {

            $post->excerpt = App::content()->applyPlugins($post->excerpt, ['post' => $post, 'markdown' => true]);
            $post->content = App::content()->applyPlugins($post->content, ['post' => $post, 'markdown' => true]);

            return $app->view('recent-blog-posts:views/recent-blog-posts-widget.php', compact('widget', 'post'));            
        }
    }

];
