type UserId = number;
type MarkdownText = string;
type Color = string;
type SessionId = number;

interface User {
    id: UserId,
    name: string,
    title: string,
};

interface Session {
    id: SessionId,
    name: string,
    ownerId: UserId,
    shortDesc?: MarkdownText,
    longDesc?: MarkdownText,
    backgroundColor?: Color,
};

interface applicationData {
    sessions: Array<Session>,
};

export async function getData() {
    const data = await Promise.resolve({ data: 'here is the data' });
    return data;
};