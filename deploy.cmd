call npm run build
copy .\src\web.config .\build\web.config
mkdir .\build\api\
copy .\src\api\directors.json .\build\api\directors.json
copy .\src\api\movies.json .\build\api\movies.json

robocopy .\build %homepath%\Dropbox\Apps\Azure\high-performance-web-applications /MIR