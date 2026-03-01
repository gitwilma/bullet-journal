import AsyncStorage from '@react-native-async-storage/async-storage';

export type TodaysNote = {
  date: string; // YYYY-MM-DD
  mood: string | null;
  noteType: string;
  text: string;
};

const STORAGE_KEY = 'todays_notes';

export async function saveTodaysNote(note: TodaysNote) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    let notes: TodaysNote[] = existing ? JSON.parse(existing) : [];
    // Replace note for today if exists
    notes = notes.filter(n => n.date !== note.date);
    notes.push(note);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    throw new Error('Could not save note');
  }
}

export async function getAllNotes(): Promise<TodaysNote[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function getNoteForDate(date: string): Promise<TodaysNote | undefined> {
  const notes = await getAllNotes();
  return notes.find(n => n.date === date);
}
