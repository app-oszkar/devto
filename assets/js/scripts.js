        <script type="text/javascript" src="https://devto.ml/assets/js/restricted.js"></script>
        <script type="text/javascript" >
            function load() {
                var mydata = JS.parse(restricted);
                alert(mydata.length);

                var div = document.getElementById('restricted');

                for(var i = 0;i < mydata.length; i++)
                {
                    div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].name +"</p>" + "<br>";
                }
            }
        </script>
