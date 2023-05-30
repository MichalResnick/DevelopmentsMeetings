class Config {
    public developmentsGroupUrl = "http://localhost:3001/api/developments-group/";
    public meetingBydevelopmentsGroupUrl = "http://localhost:3001/api/meetings-by-developments-group/";
    public addMeetingUrl = "http://localhost:3001/api/meetings/";
}

const appConfig = new Config(); // Singleton

export default appConfig;
