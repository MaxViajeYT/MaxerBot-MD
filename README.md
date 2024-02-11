INSTALACIÓN AUTOMÁTICA DE MAXERBOT
"termux-setup-storage"
"apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/maxer.sh | bash"

ACTUALIZAR MAXERBOT
"grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/MaxViajeYT/MaxerBot-MD/master/update.sh | bash"
