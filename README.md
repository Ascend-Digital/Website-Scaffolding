# Website Scaffolding

This is a boilerplate application structure to allow a developer to create website ensuring secure separation between project files and compiled assets and other files, which are intended for production.

All project JavaScript, SASS and node modules are intentionally separated from the live files contained within the src directory, making your end product more secure when deployed.

**NB:** this package cannot guarantee security in production, that is down to you. What this package can do is give you sensible separation of assets to give you a helping hand.


## What is this package useful for

* WordPress websites
* Single-page websites/applications


## Assumptions

* You're familiar with at least the basics of a Command Line Interface (CLI)
* You've had experience of Laravel Mix, Webpack and/or node.js
* You're **looking** for a better way of building web-based solutions using speed enhancements offered by frameworks like Laravel, where use of the framework itself isn't possible


## Installation

Before using this package, please make sure you have [Composer](https://getcomposer.org/) installed on your machine. For the best, cleanest and quickest experience, we'll be using Composer to set up a new project.

Create your new project by issuing the Composer `create-project` command in your terminal. Replace _WordPress_ in the below example with the desired name of your project directory.

```
composer create-project ascend-digital/website-scaffolding WordPress
```


## Getting started

* Assets are compiled using [Laravel Mix](https://laravel.com/docs/master/mix), which provides a fluent API for Webpack
* Additional packages and assets can be imported into your project using the Node Package Manager (npm)

  ```
  npm install {package_name}
  ```

    * Before being able to run Laravel Mix for the first time, ensure that node.js and npm are installed on your machine

      ```
      $ node -v
      $ npm-v
      ```

    * To download node.js and npm, please visit the [node.js download page](https://nodejs.org/download/)
* To install all the necessary out-of-the-box packages you will require to get your new application going, simply run

  ```
  npm install --save
  ```


## Setting up locally

* We love Laravel Valet - it's insane how much time this has saved us over the years and how much nicer our lives have become since not having to install MAMP. We're not going to go into detail here about how to set up PHP / MariaDB / Valet; to get yourself set up, head to the [Laravel Valet Documentation](https://laravel.com/docs/master/valet)
* We store all our website projects in a collective `~/Sites` directory, which you will see referenced later on in our examples
* If you're using Valet's `park` command, you'll need to execute the "link" command from within your project's `src` directory to instruct Valet to serve your website from there instead of the project root. To do this:
    * Open your Terminal
    * `cd` into your project directory (i.e. WordPress)
    * `cd` into your `src` directory - an action that you can chain onto the previous `cd` command, i.e. `$ cd WordPress/src`
    * Execute `valet link your_project_name`, where `your_project_name` is replaced with the text you'd like to access your project by in a web browser

        ```
        $ cd ~/Sites/Wordpress/src
        $ valet link wordpress
        $ valet secure
        ```

    * The last step is entirely optional, but given all your production websites should now be using SSL certificates to serve content over HTTPS, you can start each project the right way by having Valet create an SSL certificate to secure your local website
    * By following the above steps, the local website is now accessible in a web browser by visiting `https://wordpress.test`


## Using this package for WordPress

* We recommend installing the [WordPress Command Line Tools](https://wp-cli.org). We won't go into the instructions on how to set this up, so please visit the link to install and configure this for your machine
* Once set up, navigate into your `src` directory to install WordPress

    ```
    $ cd ~/Sites/WordPress/src
    $ wp core download --locale=en_GB
    ```

* The `--locale` option allows you to define the language localisation of your installation. If you're installing the English American (en\_US) version of WordPress, you can safely omit the `--locale` option as the default download is en\_US. Please refer to the WordPress documentation for an entire list of locale references
* There are some useful comments in the `webpack.mix.js` file on how to point compiled assets to your WordPress theme location.
* Some other useful WordPress development packages include:
    * [Underscores](https://underscores.me) for scaffolding a brand-new starter theme
    * [WordPress Plugin Boilerplate Generator](https://wppb.me) for scaffolding a brand-new plugin


## Setting up in Production

* Strictly speaking, you should be using `git` to pull your version-controlled files into your production environment, but we appreciate this isn't always feasible given you may choose to omit directories that would otherwise bloat your repo
* Your domain's `DOCUMENT_ROOT` should be set to the `src` directory, this way you ensure everything at the root level is inaccessible over the Internet
* Your assets should have been compiled using `npm run production` to ensure they are minified


### Background

Over the last few years, we've seen many developers migrate to a Laravel-based and Laravel-focussed way of working.

Using a framework like Laravel, developers are able to offload some unknowns to the wider community, particularly when it comes to security requirements. Arguably, we should all _have_ to learn about this stuff before going to work in the wild. Without ever having had industry-experience to educate a developer though - as to why CSRF, encryption and hashing are essential - it's understandable why a lot of home-rolled solutions fall victim to some of the most common vulnerabilities.

This knowledge gap does however create a wider problem when teams move to develop non-Laravel web applications, because bad habits begin to set in where developers blur the lines between local and production environments as they look to expedite development times. Instances of node_module folders being uploaded into a production environment, often with known vulnerabilities and exploits, is just one of many problems.

This package allows developers to create WordPress websites, vanilla HTML websites and all sorts of other good stuff without worrying project files will end up exposed to the World Wide Web. We of course caveat that by assuming your live environment is secured in many other ways to protect your web-space from exploits, attacks and hacks.

You could argue this shouldn't be necessary; as we hear you say _"packages should be being pulled into a production environment using version control software"_ - a notion we entirely support. That being said, there is an acceptance that this simply isn't always the case due to inexperience, ignorance or a working environment that means traditional SFTP transfer is a necessary evil.

This package is purely trying to make the online world a slightly safer place by offering some sensible structure to start developing from using tools that can help speed up development times.
