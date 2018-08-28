module.exports = function(grunt){
    grunt.initConfig({
        ts:{
            default:{
                src:['app1.ts','!node_modules/**']
            }
        },
        tslint:{
            options:{
                configuration:'tslint.json'
            },
            files:{
                src:["app1.ts"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.registerTask('default',['ts','tslint']);
}