<template>

    <div class="uk-grid pk-grid-large" data-uk-grid-margin>
        <div class="uk-flex-item-1 uk-form-horizontal">

            <div class="uk-width-medium-1-1 uk-container-center uk-margin-bottom">
                <div class="uk-panel uk-panel-box uk-panel-box-primary">
                    <p class="uk-text-danger uk-text-center">{{ 'You are using version with backlink to NorrNext website.' | trans }} <a class="uk-button uk-button-success" href="https://www.norrnext.com/pricing/backlink-removal/pkb-social" target="_blank">{{ 'Remove Backlink!' | trans }}</a></p>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title" v-validate:required>
                    <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>

            <div class="uk-grid uk-margin-top">
                <div class="uk-width-medium-2-5">

                    <ul data-uk-tab="{connect:'#tab-pkbsocial'}" class="uk-tab uk-tab-left">
                        <li class="uk-active"><a href="#"><i class="uk-icon-button uk-icon-wrench"></i> {{ 'Widget Settings' | trans }}</a></li>
                        <li class=""><a href="#"><i class="uk-icon-button uk-icon-facebook"></i> {{ 'Facebook Settings' | trans }}</a></li>
                        <li class=""><a href="#"><i class="uk-icon-button uk-icon-google-plus"></i> {{ 'Google+ Settings' | trans }}</a></li>
                        <li class=""><a href="#"><i class="uk-icon-button uk-icon-vk"></i> {{ 'VK Settings' | trans  }}</a></li>
                    </ul>

                </div>

                <div class="uk-width-medium-3-5">

                    <ul class="uk-switcher" id="tab-pkbsocial">
                        <partial name="main"></partial>
                        <partial name="fb"></partial>
                        <partial name="gp"></partial>
                        <partial name="vk"></partial>
                    </ul>

                </div>
            </div>

            <div class="uk-width-medium-1-1 uk-container-center uk-margin-top">
                <div class="uk-panel uk-panel-box uk-panel-box-primary">
                    <p class="uk-text-center">{{ 'Extensions made with love by NorrNext.' | trans }}</p>
                    <div class="uk-text-center">
                        <iframe
                            src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fnorrnext&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21"
                            scrolling="no"
                            frameborder="0"
                            style="border:none; overflow:hidden; height:20px; width:120px"
                            allowTransparency="true">
                        </iframe>
                        <div class="g-follow" data-href="https://plus.google.com/108999239898392136664" data-rel="author"></div>
                        <a href="https://twitter.com/norrnext" class="twitter-follow-button" data-show-count="true">Follow @norrnext</a>
                    </div>
                    <p class="uk-text-center">
                        <a href="https://www.norrnext.com/pagekit-extensions/pkb-social" target="_blank">{{ 'Home page' | trans }}</a> |
                        <a href="https://www.norrnext.com/downloads/free-pagekit/pkb-social" target="_blank">{{ 'Download' | trans }}</a> |
                        <a href="https://www.norrnext.com/docs/pagekit-free-widgets/pkb-social" target="_blank">{{ 'Documentation' | trans }}</a> |
                        <a href="https://www.norrnext.com/forums/categories/listings/pkb-social" target="_blank">{{ 'Support' | trans }}</a>
                    </p>
                </div>
            </div>

        </div>

        <div class="pk-width-sidebar pk-width-sidebar-large">
            <partial name="settings"></partial>
        </div>
    </div>

</template>

<script>
module.exports = {
    section: {
        label: 'Settings'
    },

    replace: false,

    partials: {
        main: require('../templates/main.html'),
        fb: require('../templates/fb.html'),
        gp: require('../templates/gp.html'),
        vk: require('../templates/vk.html')
    },

    created: function() {
        this.widget.data = _.assign({layout: 'default', titles: 'full', order: '1,2,3'}, this.widget.data);
        this.widget.data.fb = _.assign({
            profile: 'norrnext',
            colorscheme: 'light',
            width: 250,
            height: 500,
            header: 0,
            adapt: 1,
            cover: 0,
            facepile: 1,
            posts: 0
        }, this.widget.data.fb);
        this.widget.data.gp = _.assign({
            id: '108999239898392136664',
            type: 'page',
            layout: 'portrait',
            theme: 'light',
            width: 250,
            showphoto: 1,
            showtagline: 1
        }, this.widget.data.gp);
        this.widget.data.vk = _.assign({
            groupid: '28699417',
            mode: 0,
            width: 'auto',
            height: 400,
            backgroundcolour: '#FFFFFF',
            textcolour: '#2B587A',
            buttonscolour: '#5B7FA6',
            wide: 0
        }, this.widget.data.vk);
        this.$options.partials.settings = this.$root.$options.partials.settings;
    },

    ready: function() {
        $('#field-layout').change(function () {
            var titlesStyle = $('#titles-style');

            if (this.value == 'tabs' || this.value == 'switcher'){
                titlesStyle.show();
            } else {
                titlesStyle.hide();
            }
        }).change();

        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    },

    props: ['widget', 'config', 'form']
};

window.Widgets.components['norrnext-widget-social:settings'] = module.exports;
</script>