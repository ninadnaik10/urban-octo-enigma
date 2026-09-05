/**
 * Provides data-access helpers for publisher records.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Database } from './db';
import type { Publisher } from '../types/game';

/**
 * Get all publishers ordered by name.
 *
 * @param db - Injectable Drizzle database instance.
 * @returns All publisher records sorted alphabetically by name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
