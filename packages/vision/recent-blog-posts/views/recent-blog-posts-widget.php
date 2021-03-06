<?php $view->script('post', 'blog:app/bundle/post.js', 'vue') ?>

<article class="uk-article">    

    <?php if ($widget->get('displayImage')): ?>
        <?php if ($image = $post->get('image.src')): ?>
            <img src="<?= $image ?>" alt="<?= $post->get('image.alt') ?>">
        <?php endif ?>
    <?php endif ?>


    <h1 class="uk-article-title"><?= $post->title ?></h1>

    <p class="uk-article-meta">
        <?= __('Written by %name% on %date%', ['%name%' => $post->user->name, '%date%' => '<time datetime="'.$post->date->format(\DateTime::ATOM).'" v-cloak>{{ "'.$post->date->format(\DateTime::ATOM).'" | date "longDate" }}</time>' ]) ?>
    </p>

    <div class="uk-margin"><?= $post->excerpt ?: $post->content ?></div>

</article>
