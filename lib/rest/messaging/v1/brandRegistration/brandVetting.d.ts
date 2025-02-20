/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type BrandVettingVettingProvider = 'campaign-verify';

/**
 * Initialize the BrandVettingList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param brandSid - A2P BrandRegistration Sid
 */
declare function BrandVettingList(version: V1, brandSid: string): BrandVettingListInstance;

interface BrandVettingListInstance {
  /**
   * create a BrandVettingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: BrandVettingListInstanceCreateOptions, callback?: (error: Error | null, item: BrandVettingInstance) => any): Promise<BrandVettingInstance>;
  /**
   * Streams BrandVettingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BrandVettingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: BrandVettingListInstanceEachOptions, callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Retrieve a single target page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Lists BrandVettingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
  /**
   * Lists BrandVettingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: BrandVettingListInstanceOptions, callback?: (error: Error | null, items: BrandVettingInstance[]) => any): Promise<BrandVettingInstance[]>;
  /**
   * Retrieve a single page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Retrieve a single page of BrandVettingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: BrandVettingListInstancePageOptions, callback?: (error: Error | null, items: BrandVettingPage) => any): Promise<BrandVettingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property vettingId - The unique ID of the vetting
 * @property vettingProvider - Third-party provider of the vettings to create
 */
interface BrandVettingListInstanceCreateOptions {
  vettingId?: string;
  vettingProvider: BrandVettingVettingProvider;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property vettingProvider - Third-party provider of the vettings to create
 */
interface BrandVettingListInstanceEachOptions {
  callback?: (item: BrandVettingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  vettingProvider?: BrandVettingVettingProvider;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property vettingProvider - Third-party provider of the vettings to create
 */
interface BrandVettingListInstanceOptions {
  limit?: number;
  pageSize?: number;
  vettingProvider?: BrandVettingVettingProvider;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property vettingProvider - Third-party provider of the vettings to create
 */
interface BrandVettingListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  vettingProvider?: BrandVettingVettingProvider;
}

interface BrandVettingPayload extends BrandVettingResource, Page.TwilioResponsePayload {
}

interface BrandVettingResource {
  account_sid: string;
  brand_sid: string;
  brand_vetting_sid: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  vetting_class: string;
  vetting_id: string;
  vetting_provider: BrandVettingVettingProvider;
  vetting_status: string;
}

interface BrandVettingSolution {
  brandSid?: string;
}


declare class BrandVettingInstance extends SerializableClass {
  /**
   * Initialize the BrandVettingContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param brandSid - A2P BrandRegistration Sid
   */
  constructor(version: V1, payload: BrandVettingPayload, brandSid: string);

  accountSid: string;
  brandSid: string;
  brandVettingSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  vettingClass: string;
  vettingId: string;
  vettingProvider: BrandVettingVettingProvider;
  vettingStatus: string;
}


declare class BrandVettingPage extends Page<V1, BrandVettingPayload, BrandVettingResource, BrandVettingInstance> {
  /**
   * Initialize the BrandVettingPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BrandVettingSolution);

  /**
   * Build an instance of BrandVettingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BrandVettingPayload): BrandVettingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { BrandVettingInstance, BrandVettingList, BrandVettingListInstance, BrandVettingListInstanceCreateOptions, BrandVettingListInstanceEachOptions, BrandVettingListInstanceOptions, BrandVettingListInstancePageOptions, BrandVettingPage, BrandVettingPayload, BrandVettingResource, BrandVettingSolution, BrandVettingVettingProvider }
