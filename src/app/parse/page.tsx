"use client";
import axios from "axios";
import React, { useState } from "react";

interface ParsedData {
  id: number;
  inputUserAgent: string;
  uaFamily: string;
  uaMajor: string;
  uaMinor: string;
  osFamily: string;
  osMajor: string;
  osMinor: string;
  deviceFamily: string;
}

const ParsePage = () => {
  const [userAgent, setUserAgent] = useState<string>("");
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make the API request to parse the user agent (replace with your API endpoint)
      const response = await axios.get<ParsedData>(
        "http://localhost:8080/user-agent",
        {
          params: { userAgent: userAgent },
        }
      );

      setParsedData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to parse User-Agent.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserAgent(value);

    // Clear the parsed data if the input is empty
    if (value === "") {
      setParsedData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">User-Agent Parser</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-6 rounded shadow-md"
      >
        <label
          htmlFor="userAgent"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Enter User-Agent String:
        </label>
        <input
          id="userAgent"
          type="text"
          value={userAgent}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Mozilla/5.0..."
          required
        />

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Parsing..." : "Parse User-Agent"}
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {parsedData && (
        <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Parsed Data</h2>
          <p>
            <strong className="text-blue-500">User Agent:</strong>{" "}
            {parsedData.inputUserAgent}
          </p>
          <p>
            <strong className="text-blue-500">UA Family:</strong>{" "}
            {parsedData.uaFamily}
          </p>
          <p>
            <strong className="text-blue-500">UA Version:</strong>{" "}
            {parsedData.uaMajor}.{parsedData.uaMinor}
          </p>
          <p>
            <strong className="text-blue-500">OS Family:</strong>{" "}
            {parsedData.osFamily}
          </p>
          <p>
            <strong className="text-blue-500">OS Version:</strong>{" "}
            {parsedData.osMajor}.{parsedData.osMinor}
          </p>
          <p>
            <strong className="text-blue-500">Device Family:</strong>{" "}
            {parsedData.deviceFamily}
          </p>
        </div>
      )}
    </div>
  );
};

export default ParsePage;
