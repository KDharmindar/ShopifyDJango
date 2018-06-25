from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings


def task_runner(task):
    product_url = task.site
    process = CrawlerProcess(get_project_settings())
    proces.crawl('search')
    process.start()