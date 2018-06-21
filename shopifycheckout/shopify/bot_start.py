from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerRunner
from twisted.internet import reactor
from twisted.internet import task
from random import randint


timeout = 3


def run_spider():
    print('step 1')
    l.stop()
    print('step 2')
    runner = CrawlerRunner(get_project_settings())
    print('step 3')
    if randint(0, 9) > 5:
        print('step 4')
        spider_name = 'search'
    else:
        print('step 5')
        spider_name = 'search'
    d = runner.crawl(spider_name)
    print('step 6')
    d.addBoth(lambda _: l.start(timeout, False))



l = task.LoopingCall(run_spider)
print('step 7')
l.start(timeout)
print('step 8')

reactor.run()
print('I m here.')