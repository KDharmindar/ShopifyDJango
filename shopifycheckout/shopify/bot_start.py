import subprocess
from subprocess import Popen, PIPE

process = Popen(['scrapy', 'crawl', 'checkout'], stdout=PIPE, stderr=PIPE)
stdout, stderr = process.communicate()
print(stdout)
