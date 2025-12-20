const userSettings = {
    theme: "dark",
    language: "en",
    notifications: true
}

type UserSettings = typeof userSettings;

type UserSettingsKey = keyof UserSettings;

function getSetting<UserSettings, UserSettingsKey extends keyof UserSettings> 
(object: UserSettings, key: UserSettingsKey) {
    return object[key];
}

type FlexibleSettings = {
    [key: string]: number | string | boolean
}