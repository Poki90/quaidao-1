/* eslint-disable-next-line no-console */
import {ENABLE_DEBUG_LOG} from "config";

export const debugLog = (...logs) => ENABLE_DEBUG_LOG && console.log(...logs);
