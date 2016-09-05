module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: [{
                    expand: true,
                    cwd: '<%=pkg.resourceUrl%>dist/less',
                    src: ['**/*.less'],
                    dest: '<%=pkg.resourceUrl%>css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['<%=pkg.resourceUrl%>dist/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
            imagesMin : {
                files: ['<%=pkg.resourceUrl%>images/*.{png,jpg,jpeg}'],
                tasks: ['imagemin']
            }
        },
        uglify : {
            build: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'v2/everinner_app/htdocs/assets/js',//js目录下
                    src:'**/*.js',//所有js文件
                    ext: '.min.js',   // 目标文件路径中文件的扩展名
                    dest: 'v2/everinner_app/htdocs/assets/mix'//输出到此目录下
                }]
            },
        },
        imagemin: {                          // Task 
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: '<%=pkg.resourceUrl%>images',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: '<%=pkg.resourceUrl%>/images' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // 默认被执行的任务列表。
    grunt.registerTask('default', ['watch'],['imagemin'],['uglify']);

};