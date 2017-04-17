// Type definitions for YouTube Data API 3.0
// based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gapi.youtube/index.d.ts

export interface YouTubeList<T> {

  /**
   * The type of the API response. For this operation, the value will be youtube#activityListResponse.
   */
  kind: string;
  /**
   * The ETag of the response.
   */
  etag: string;
  /**
   * The pageInfo object encapsulates paging information for the result set.
   */
  pageInfo: {
    /**
     * The total number of results in the result set.
     */
    totalResults: number;
    /**
     * The number of results included in the API response.
     */
    resultsPerPage: number;
  };
  /**
   * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
   */
  nextPageToken: string;
  /**
   * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
   */
  prevPageToken: string;
  /**
   * A list of activities, or events, that match the request criteria.
   */
  items: T[];

}

export interface YouTubeSubscription {
  /**
   * The ID that YouTube uses to uniquely identify the subscription.
   */
  id: string;
  /**
   * The ETag of the subscription resource.
   */
  etag: string;
  /**
   * The type of the API resource. For subscription resources, the value will be youtube#subscription.
   */
  kind: string;
  /**
   * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
   */
  snippet: {
    /**
     * The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt: string;
    /**
     * The title of the channel that the subscription belongs to.
     */
    channelTitle: string;
    /**
     * The subscriptions title.
     */
    title: string;
    /**
     * The subscriptions details.
     */
    description: string;
    /**
     * The id object contains information about the channel that the user subscribed to.
     */
    resourceId: {
      /**
       * The type of the API resource.
       */
      kind: string;
      /**
       * The value that YouTube uses to uniquely identify the channel that the user subscribed to.
       */
      channelId: string;
    }
    /**
     * The ID that YouTube uses to uniquely identify the subscribers channel. The resource_id object identifies the channel that the user
     * subscribed to.
     */
    channelId: string;
    /**
     * A map of thumbnail images associated with the subscription. For each object in the map, the key is the name of the thumbnail image,
     * and the value is an object that contains other information about the thumbnail.
     */
    thumbnails: YouTubeThumbnail;
  };
  /**
   *
   */
  contentDetails: {
    /**
     *
     */
    totalItemCount: number;
    /**
     *
     */
    newItemCount: number;
  };
  /**
   *
   */
  subscriberSnippet: {
    title: string;
    description: string;
    channelId: string;
    thumbnails: YouTubeThumbnail;
  };
}

export interface YouTubeChannel {
  /**
   * The ID that YouTube uses to uniquely identify the channel.
   */
  id: string;
  /**
   * The type of the API resource. For channel resources, the value will be youtube#channel.
   */
  kind: string;
  /**
   * The ETag for the channel resource.
   */
  etag: string;
  /**
   * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
   */
  snippet: {
    /**
     * The channels title.
     */
    title: string;
    /**
     * The channels description.
     */
    description: string;
    /**
     * The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt: string;
    /**
     * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image,
     * and the value is an object that contains other information about the thumbnail.
     */
    thumbnails: YouTubeThumbnail;
  };
  /**
   * The contentDetails object encapsulates information about the channels content.
   */
  contentDetails: {
    /**
     * The relatedPlaylists object is a map that identifies playlists associated with the channel, such as the channels uploaded videos
     * or favorite videos. You can retrieve any of these playlists using the playlists.list method.
     */
    relatedPlaylists: {
      /**
       * The ID of the playlist that contains the channels liked videos.
       */
      likes: string;
      /**
       * The ID of the playlist that contains the channels favorite videos.
       */
      favorites: string;
      /**
       * The ID of the playlist that contains the channels uploaded videos.
       */
      uploads: string;
      /**
       * The ID of the playlist that contains the channels watch history.
       */
      watchHistory: string;
      /**
       * The ID of the channels watch later playlist.
       */
      watchLater: string;
    }
    /**
     * The googlePlusUserId object identifies the Google+ profile ID associated with this channel.
     */
    googlePlusUserId: string;
  };
  /**
   * The statistics object encapsulates statistics for the channel.
   */
  statistics: {
    /**
     * The number of times the channel has been viewed.
     */
    viewCount: number;
    /**
     * The number of comments for the channel.
     */
    commentCount: number;
    /**
     * The number of subscribers that the channel has.
     */
    subscriberCount: number;
    /**
     * The number of videos uploaded to the channel.
     */
    videoCount: number;
  };
  /**
   * The topicDetails object encapsulates information about Freebase topics associated with the channel.
   */
  topicDetails: {
    /**
     * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
     */
    topicIds: string[];
  };
  /**
   * The status object encapsulates information about the privacy status of the channel.
   */
  status: {
    /**
     * Privacy status of the channel.
     */
    privacyStatus: string;
    /**
     * Indicates whether the channel data identifies a user that is already linked to either a YouTube username or a Google+ account.
     * A user that has one of these links already has a public YouTube identity, which is a prerequisite for several actions,
     * such as uploading videos.
     */
    isLinked: boolean;
  };
  /**
   * The brandingSettings object encapsulates information about the branding of the channel.
   */
  brandingSettings: {
    /**
     * The channel object encapsulates branding properties of the channel page.
     */
    channel: {
      /**
       * The channels title. The title has a maximum length of 30 characters.
       */
      title: string;
      /**
       * The channel description, which appears in the channel information box on your channel page.
       */
      description: string;
      /**
       * Keywords associated with your channel. The value is a comma-separated list of strings.
       */
      keywords: string;
      /**
       * The content tab that users should display by default when viewers arrive at your channel page.
       */
      defaultTab: string;
      /**
       * The ID for a Google Analytics account that you want to use to track and measure traffic to your channel.
       */
      trackingAnalyticsAccountId: string;
      /**
       * This setting determines whether user-submitted comments left on the channel page need to be approved by the channel owner
       * to be publicly visible. The default value is false.
       */
      moderateComments: boolean;
      /**
       * This setting indicates whether YouTube should show an algorithmically generated list of related channels on your channel page.
       */
      showRelatedChannels: boolean;
      /**
       * This setting indicates whether the channel page should display content in a browse or feed view.
       */
      showBrowseView: boolean;
      /**
       * The title that displays above the featured channels module.
       */
      featuredChannelsTitle: string;
      /**
       * A list of up to 16 channels that you would like to link to from the featured channels module. The property value is a list of
       * YouTube channel ID values, each of which uniquely identifies a channel.
       */
      featuredChannelsUrls: string[];
      /**
       * The video that should play in the featured video module in the channel pages browse view for unsubscribed viewers.
       * Subscribed viewers may see a different view that highlights more recent channel activity.
       */
      unsubscribedTrailer: string;
    }
    /**
     * The watch object encapsulates branding properties of the watch pages for the channels videos.
     */
    watch: {
      /**
       * The background color for the video watch pages branded area.
       */
      textColor: string;
      /**
       * The text color for the video watch pages branded area.
       */
      backgroundColor: string;
      /**
       * An ID that uniquely identifies a playlist that displays next to the video player on the video watch page.
       */
      featuredPlaylistId: string;
    }
    /**
     * The image object encapsulates information about images that display on the channels channel page or video watch pages.
     */
    image: {
      /**
       * The URL for the banner image shown on the channel page on the YouTube website. The image is 1060px by 175px.
       */
      bannerImageUrl: string;
      /**
       * The URL for the banner image shown on the channel page in mobile applications. The image is 640px by 175px.
       */
      bannerMobileImageUrl: string;
      /**
       * The backgroundImageUrl object encapsulates settings for the background image shown on the video watch page.
       * The image is 1200px by 615px, with a maximum file size of 128k.
       */
      backgroundImageUrl: {
        /**
         * The default value for the property.
         */
        'default': string;
        /**
         * A list of objects that specify language-specific values for the property.
         */
        localized: {
          /**
           * The property value for a specified language.
           */
          value: string;
          /**
           * The language associated with the value.
           */
          language: string;
        }[];
      }
      /**
       * The largeBrandedBannerImageImapScript object encapsulates information about the image map script for the banner image shown
       * on the channel page.
       */
      largeBrandedBannerImageImapScript: {
        /**
         * The default value for the property.
         */
        'default': string;
        /**
         * A list of objects that specify language-specific values for the property.
         */
        localized: {
          /**
           * The property value for a specified language.
           */
          value: string;
          /**
           * The language associated with the value.
           */
          language: string;
        }[];
      }
      /**
       * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
       */
      largeBrandedBannerImageUrl: {
        /**
         * The default value for the property.
         */
        'default': string;
        /**
         * A list of objects that specify language-specific values for the property.
         */
        localized: {
          /**
           * The property value for a specified language.
           */
          value: string;
          /**
           * The language associated with the value.
           */
          language: string;
        }[];
      }
      /**
       * The image map script for the small banner image. The largeBrandedBannerImageImapScript object encapsulates information about
       * the image map script for the banner image shown on the channel page in mobile applications.
       */
      smallBrandedBannerImageImapScript: {
        /**
         * The default value for the property.
         */
        'default': string;
        /**
         * A list of objects that specify language-specific values for the property.
         */
        localized: {
          /**
           * The property value for a specified language.
           */
          value: string;
          /**
           * The language associated with the value.
           */
          language: string;
        }[];
      }
      /**
       * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page.
       */
      smallBrandedBannerImageUrl: {
        /**
         * The default value for the property.
         */
        'default': string;
        /**
         * A list of objects that specify language-specific values for the property.
         */
        localized: {
          /**
           * The property value for a specified language.
           */
          value: string;
          /**
           * The language associated with the value.
           */
          language: string;
        }[];
      }
      /**
       * The URL for the image that appears above the video player. This is a 25-pixel-high image with a flexible width
       * that cannot exceed 170 pixels. If you do not provide this image, your channel name will appear instead of an image.
       */
      watchIconImageUrl: string;
      /**
       * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
       */
      trackingImageUrl: string;
      /**
       * The URL for a low-resolution banner image that displays on the channel page in tablet applications. The image is 1138px by 188px.
       */
      bannerTabletLowImageUrl: string;
      /**
       * The URL for a banner image that displays on the channel page in tablet applications. The image is 1707px by 283px.
       */
      bannerTabletImageUrl: string;
      /**
       * The URL for a high-resolution banner image that displays on the channel page in tablet applications. The image is 2276px by 377px.
       */
      bannerTabletHdImageUrl: string;
      /**
       * The URL for an insanely high-resolution banner image that displays on the channel page in tablet applications.
       * The image is 2560px by 424px.
       */
      bannerTabletExtraHdImageUrl: string;
      /**
       * The URL for a low-resolution banner image that displays on the channel page in mobile applications. The image is 320px by 88px.
       */
      bannerMobileLowImageUrl: string;
      /**
       * The URL for a medium-resolution banner image that displays on the channel page in mobile applications. The image is 960px by 263px.
       */
      bannerMobileMediumImageUrl: string;
      /**
       * The URL for a high-resolution banner image that displays on the channel page in mobile applications. The image is 1280px by 360px.
       */
      bannerMobileHdImageUrl: string;
      /**
       * The URL for a very high-resolution banner image that displays on the channel page in mobile applications.
       * The image is 1440px by 395px.
       */
      bannerMobileExtraHdImageUrl: string;
      /**
       * The URL for a banner image that displays on the channel page in television applications. The image is 2120px by 1192px.
       */
      bannerTvImageUrl: string;
      /**
       * This property specifies the location of the banner image that YouTube will use to generate the various banner image sizes
       * for a channel. To obtain the URL banner images external URL, you must first upload the channel banner image that you want to use
       * by calling the channelBanners.insert method.
       */
      bannerExternalUrl: string;
    }
    /**
     * The hints object encapsulates additional branding properties
     */
    hints: {
      /**
       * A property.
       */
      property: string;
      /**
       * The propertys value.
       */
      value: string;
    }[];
  };
  /**
   * The invideoPromotion object encapsulates information about a promotional campaign associated with the channel.
   * A channel can use an in-video promotional campaign to display the thumbnail image of a promoted video in the video player during
   * playback of the channels videos
   */
  invideoPromotion: {
    /**
     * The timing object encapsulates information about the temporal position within the video when the promoted item will be displayed.
     */
    timing: {
      /**
       * The timing method that determines when the promoted item is inserted during the video playback. If the value is offsetFromStart,
       * then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field
       * represents an offset from the end of the video.
       */
      type: string;
      /**
       * The time offset, specified in milliseconds, that determines when the promoted item appears during video playbacks.
       * The type propertys value determines whether the offset is measured from the start or end of the video.
       */
      offsetMs: number;
    }
    /**
     * The position object encapsulates information about the spatial position within the video where the promoted item will be displayed.
     */
    position: {
      /**
       * The manner in which the promoted item is positioned in the video player.
       */
      type: string;
      /**
       * The corner of the player where the promoted item will appear.
       */
      cornerPosition: string;
    }
    /**
     * The list of promoted items in the order that they will display across different playbacks to the same viewer.
     */
    items: {
      /**
       * The promoted items type.
       */
      type: string;
      /**
       * If the promoted item represents a video, then this value is present and identifies the YouTube ID that YouTube assigned
       * to identify that video. This field is only present if the type propertys value is video.
       */
      videoId: string;
    }[];
  };
}


export interface YouTubePlaylist {
  /**
   * The ID that YouTube uses to uniquely identify the playlist.
   */
  id: string;
  /**
   * The type of the API resource. For video resources, the value will be youtube#playlist.
   */
  kind: string;
  /**
   * The ETag for the playlist resource.
   */
  etag: string;
  /**
   * The snippet object contains basic details about the playlist, such as its title and description.
   */
  snippet: {
    /**
     * The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt: string;
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the playlist.
     */
    channelId: string;
    /**
     * The playlists title.
     */
    title: string;
    /**
     * The playlists description.
     */
    description: string;
    /**
     * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image,
     * and the value is an object that contains other information about the thumbnail.
     */
    thumbnails: YouTubeThumbnail;
    /**
     * The channel title of the channel that the video belongs to.
     */
    channelTitle: string;
    /**
     * Keyword tags associated with the playlist.
     */
    tags: string[];
  };
  /**
   * The status object contains status information for the playlist.
   */
  status: {
    /**
     * The playlists privacy status.
     */
    privacyStatus: string;
  };
  /**
   * The contentDetails object contains information about the playlist content, including the number of videos in the playlist.
   */
  contentDetails: {
    /**
     * The number of videos in the playlist.
     */
    itemCount: number;
  };
  /**
   * The player object contains information that you would use to play the playlist in an embedded player.
   */
  player: {
    /**
     * An <iframe> tag that embeds a player that will play the playlist.
     */
    embedHtml: string;
  };
}

export interface YouTubeThumbnail {
  /**
   * The default thumbnail image. The default thumbnail for a video – or a resource that refers to a video, such as a playlist item or
   * search result – is 120px wide and 90px tall. The default thumbnail for a channel is 88px wide and 88px tall.
   */
  'default': YouTubeThumbnailItem;
  /**
   * A higher resolution version of the thumbnail image. For a video (or a resource that refers to a video), this image is 320px wide and
   * 180px tall. For a channel, this image is 240px wide and 240px tall.
   */
  medium: YouTubeThumbnailItem;
  /**
   * A high resolution version of the thumbnail image. For a video (or a resource that refers to a video), this image is 480px wide and
   * 360px tall. For a channel, this image is 800px wide and 800px tall.
   */
  high: YouTubeThumbnailItem;
  /**
   * An even higher resolution version of the thumbnail image than the high resolution image. This image is available for some videos
   * and other resources that refer to videos, like playlist items or search results. This image is 640px wide and 480px tall.
   */
  standard: YouTubeThumbnailItem;
  /**
   * The highest resolution version of the thumbnail image. This image size is available for some videos and other resources
   * that refer to videos, like playlist items or search results. This image is 1280px wide and 720px tall.
   */
  maxres: YouTubeThumbnailItem;
}

export interface YouTubeThumbnailItem {
  /**
   * The images URL.
   */
  url: string;
  /**
   * The images width.
   */
  width: number;
  /**
   * The images height.
   */
  height: number;
}
