const gulp = require('gulp'); // Importamos el Task Runner GULP
const sass = require('gulp-sass'); // Importamos una funcionalidad de GULP para Compilar los Archivos Sass
const browserSync = require('browser-sync'); // Importamos Browser-sync para que se refresque el navegador cada vez que guardemos un cambio en el codigo

gulp.task('sass', gulp.series( () =>{
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss', //  |  Seleccionamos los archivos Sass
        'src/scss/*.scss'                             //  |  que vamos a compilar 
    ])
    .pipe(sass({outputStyle: 'compressed'})) // | Compila el archivo Sass y Comprime el archivo Css
    .pipe(gulp.dest('src/css'))              // | Lo guardamos en la siguiente ruta
    .pipe(browserSync.stream());             // | Refrescamos el navegador cada vez que se detecta un cambio en la carpeta "scss"
}));

gulp.task('js',gulp.series( () => {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.js',      //  |  Seleccionamos los archivos 
        'node_modules/jquery/dist/jquery.min.js',           //  |  con los que queremos trabajar
        'node_modules/popper.js/dist/umd/popper.min.js',    //  |
        'node_modules/scrollreveal/dist/scrollreveal.min.js'
    ])
    .pipe(gulp.dest('src/js'))   //  | Le pasamos el destino donde queremos copiar los archivos, en el caso que no exista la ruta, este la crea
    .pipe(browserSync.stream()); //  |  Cuando se detecte un cambio en los archivos, se refresca el navegador 
}));

gulp.task('font-awesome',gulp.series( () => { 
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css') //  |  Seleccionamos los archivos con los que queremos trabajar
        .pipe(gulp.dest('src/css'));//  | Le pasamos el destino donde queremos copiar los archivos, en el caso que no exista la ruta, este la crea
}));

gulp.task('fonts',gulp.series( () => {
    return gulp.src('node_modules/font-awesome/fonts/*') //  |  Seleccionamos los archivos con los que queremos trabajar
        .pipe(gulp.dest('src/fonts'))//  | Le pasamos el destino donde queremos copiar los archivos, en el caso que no exista la ruta, este la crea
}));

gulp.task('serve',gulp.series( ['sass'], () => { // |   Compilamos la Funcion sass para Compilar los archivos Sasss y Comprimir el Css, luego ejecutamos la funcion de flechas
    browserSync.init({                          //  |   Ejecutamos el iniciador de Browser Sync
        server: {                               //  |   Le pasamos el Directorio con el que Trabajará el Servidor
            baseDir: './src'                    //  |
        }
    });
}));

                                                                
gulp.watch([                                                 // |    Ejecutamos una tarea para estar siempre atento
    'node_modules/bootstrap/scss/bootstrap.scss',            // |    en el caso que halla un cambio en los siguientes  
    'src/scss/*.scss'                                        // |    directorios. 
], gulp.parallel( ['sass'] ));                               // |    Antes de refrescar el navegador, compilamos los archivos Sass
                                                             // |
gulp.watch(['src/*.html']).on('change', browserSync.reload); // |
                                                             // |
gulp.watch(['src/js/*.js']).on('change', browserSync.reload);// |

gulp.task('default', gulp.series(['font-awesome','fonts','js','serve'])); // | Ejecutamos todas las tareas automatizadas que se programo.
                                                                          // | HAY QUE TENER CUIDADO EN EL ORDEN QUE SE EJECUTAN LAS TAREAS