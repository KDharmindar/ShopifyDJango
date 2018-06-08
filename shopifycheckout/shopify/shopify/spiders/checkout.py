# -*- coding: utf-8 -*-
from shopify.spiders import ShopifySpider
from shopify.items import ShopifyItem, ShopifyPrice, ShopifyVariant, ShopifyItemLoader
from shopify.utils import is_empty
from shopify.gateway import get_profile
from selenium.webdriver.support.wait import WebDriverWait

#from shopify.components import monitor
import re
import json
import traceback
import time

from scrapy import Request, FormRequest, Item
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst
from shopify.selenium import SeleniumSpiderMixin, extracts_see_all_url
URLS_FILE = "urls.txt"
IDLE_INTERVAL_IN_SECONDS = 30


class CheckoutSpider(SeleniumSpiderMixin, ShopifySpider):
    name = 'checkout'
    allowed_domains = ['kith.com']

    with open(URLS_FILE, "rt") as f:
        start_urls = [url.strip() for url in f]

    start_urls = ['https://kith.com/']


    def parse(self, response):
        self.driver.get('https://kith.com/')
        wait = WebDriverWait(self.driver, IDLE_INTERVAL_IN_SECONDS)
        print('----------------', wait)
        time.sleep(IDLE_INTERVAL_IN_SECONDS)

    def _extract_json_info(self, response):

        print(response)

        # info_expr = re.compile(br'(?<=var product =).+?(?=;)',
        #                        re.MULTILINE | re.DOTALL)
        # info = re.search(info_expr, response.body)
        # return json.loads(info.group())

    def _fill_from_json(self, loader):
        item = loader.context['item']
        product = loader.context['ajax']
        loader.replace_value('id', product.get('id'))
        loader.replace_value('title', product.get('title'))
        loader.replace_value('handle', product.get('handle'))
        loader.replace_value('description', product.get('description'))
        loader.replace_value('published_at', product.get('published_at'))
        loader.replace_value('created_at', product.get('created_at'))
        loader.replace_value('vendor', product.get('vendor'))
        loader.replace_value('type', product.get('type'))
        loader.replace_value('tags', product.get('tags'))
        loader.replace_value('price', product.get('price'))
        loader.replace_value('price_min', product.get('price_min'))
        loader.replace_value('price_max', product.get('price_max'))
        loader.replace_value('available', product.get('available'))
        loader.replace_value('price_varies', product.get('price_varies'))
        loader.replace_value('compare_at_price', product.get('compare_at_price'))
        loader.replace_value('compare_at_price_min', product.get('compare_at_price_min'))
        loader.replace_value('compare_at_price_max', product.get('compare_at_price_max'))
        loader.replace_value('compare_at_price_varies', product.get('compare_at_price_varies'))
        loader.replace_value('variants', product.get('variants'))
        loader.replace_value('images', product.get('images'))
        loader.replace_value('options', product.get('options'))
        # loader.add_value(None, product)

        item = loader.load_item()

        return item

    def _fill_from_response(self, loader):
        pass

    def _add_to_cart(self, response):
        pass

    def _checkout(self, response):
        pass

    def _extract_json_info(self, response):
        pass

    def _fill_from_json(self, response):
        pass
