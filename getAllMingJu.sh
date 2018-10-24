
for PAGE in {1..200}
do
    echo ${PAGE}
    wget https://so.gushiwen.org/mingju/default.aspx\?p\=${PAGE}\&c\=\&t\= -O page${PAGE}.html
done
