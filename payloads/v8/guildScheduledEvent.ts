import type { APIUser } from './user';
import type { Snowflake } from '../../globals';

export interface APIGuildScheduledEvent {
	/**
	 * The id of the guild event
	 */
	id: Snowflake;
	/**
	 * The guild id which the scheduled event belongs to
	 */
	guild_id: Snowflake;
	/**
	 * The channel id in which the scheduled event will be hosted, or `null` if entity type is `EXTERNAL`
	 */
	channel_id: Snowflake | null;
	/**
	 * The id of the user that created the scheduled event
	 */
	creator_id: Snowflake | null;
	/**
	 * The name of the scheduled event
	 */
	name: string;
	/**
	 * The description of the scheduled event
	 */
	description?: string;
	/**
	 * The time the scheduled event will start
	 */
	scheduled_start_time: string;
	/**
	 * The time at which the guild event will end, or `null` if the event does not have a scheduled time to end
	 */
	scheduled_end_time: string | null;
	/**
	 * The privacy level of the scheduled event
	 */
	privacy_level: GuildScheduledEventPrivacyLevel;
	/**
	 * The status of the scheduled event
	 */
	status: GuildScheduledEventStatus;
	/**
	 * The type of hosting entity associated with the scheduled event
	 */
	entity_type: GuildScheduledEventEntityType;
	/**
	 * The id of the hosting entity associated with the scheduled event
	 */
	entity_id: Snowflake | null;
	/**
	 * The entity metadata for the scheduled event
	 */
	entity_metadata: APIGuildScheduledEventEntityMetadata;
	/**
	 * The user that created the scheduled event
	 */
	creator?: APIUser;
	/**
	 * The number of users subscribed to the scheduled event
	 */
	user_count?: number;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
 */
export interface APIGuildScheduledEventEntityMetadata {
	/**
	 * The location of the scheduled event
	 */
	location?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
 */
export const enum GuildScheduledEventEntityType {
	StageInstance = 1,
	Voice,
	External,
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 */
export const enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active,
	Completed,
	Canceled,
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
 */
export const enum GuildScheduledEventPrivacyLevel {
	/**
	 * The scheduled event is only accessible to guild members
	 */
	GuildOnly = 2,
}
