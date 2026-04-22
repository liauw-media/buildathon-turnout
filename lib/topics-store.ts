import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Topic } from "./topics";
import { SEED_TOPICS } from "./topics";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "topics.json");

async function ensureFile(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(SEED_TOPICS, null, 2), "utf8");
  }
}

export async function readTopics(): Promise<Topic[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as Topic[];
}

export async function writeTopics(topics: Topic[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(topics, null, 2), "utf8");
}

export async function getTopicsByCountry(country: string): Promise<Topic[]> {
  const topics = await readTopics();
  return topics.filter((t) => t.country === country);
}

export async function getTopic(id: string): Promise<Topic | undefined> {
  const topics = await readTopics();
  return topics.find((t) => t.id === id);
}

export async function addTopic(
  input: Omit<Topic, "id" | "createdAt">,
): Promise<Topic> {
  const topics = await readTopics();
  const topic: Topic = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  topics.push(topic);
  await writeTopics(topics);
  return topic;
}

export async function updateTopic(
  id: string,
  input: Partial<Omit<Topic, "id" | "createdAt">>,
): Promise<Topic | undefined> {
  const topics = await readTopics();
  const idx = topics.findIndex((t) => t.id === id);
  if (idx === -1) return undefined;
  topics[idx] = { ...topics[idx], ...input };
  await writeTopics(topics);
  return topics[idx];
}

export async function deleteTopic(id: string): Promise<boolean> {
  const topics = await readTopics();
  const idx = topics.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  topics.splice(idx, 1);
  await writeTopics(topics);
  return true;
}
