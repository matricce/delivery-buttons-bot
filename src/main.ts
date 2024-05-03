import 'dotenv/config';
import bot from './bot';
import { Delivery, deliveryEvents } from './delivery';
import { development } from './utils/start';

bot.on(['channel_post', 'edited_channel_post'], async ctx => Delivery(bot, ctx));

deliveryEvents(bot);

process.env.NODE_ENV === 'development' && development(bot);

export {};
