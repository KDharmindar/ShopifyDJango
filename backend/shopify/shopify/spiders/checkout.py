# -*- coding: utf-8 -*-
from shopify.spiders import ShopifySpider
from shopify.items import ShopifyItem, ShopifyPrice, ShopifyVariant, ShopifyItemLoader
from shopify.utils import is_empty
from shopify.gateway import test
#from shopify.components import monitor
import re
import json
import traceback
from scrapy import Request, FormRequest, Item
from scrapy.loader import ItemLoader
from scrapy.loader.processors import TakeFirst
from shopify.selenium import SeleniumSpiderMixin

class CheckoutSpider(SeleniumSpiderMixin, ShopifySpider):
    name = 'checkout'
    allowed_domains = ['kith.com']
    start_urls = ['https://kith.com/']

    def parse(self, response):
        print(test())
        pass

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
