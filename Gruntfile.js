module.exports = function(grunt) {

    grunt.initConfig({
        openui5_preload: {
            library: {
                options: {
                    resources: 'src',
                    dest: 'target/classes/META-INF/resources/'
                },
                libraries: 'incentergy/ol'
            }
        }
    });
    grunt.loadNpmTasks('grunt-openui5');
    grunt.registerTask('default', ['openui5_preload']);

};