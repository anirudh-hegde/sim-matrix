# SimMatrix

## Overview
SimMatrix is an intuitive application designed to fetch and display the first assigned mobile carrier for a given phone number. Leveraging advanced number parsing and carrier lookup functionality, SimMatrix provides insights into the original telecom service provider of a phone number, making it useful for telecom analytics, historical recordkeeping, or simply satisfying curiosity.
This tool is simple to use and user-friendly, enabling quick access to telecom information in just a few clicks.

## Features
1. Carrier Lookup:
Retrieve the first assigned carrier for any mobile number worldwide.
Support for international phone numbers.

2. Interactive Input:
Clean and intuitive input field for entering phone numbers.
Supports the international format for accurate results (e.g., +91XXXXXXXXXX).
Submit: Fetch the carrier name for the provided number.

3. Optimized layout for seamless interaction across devices and clean display
of results for better readability.

## Getting Started
### Prerequisites
- NodeJs
- ReactJS
- Vite
- Tailwind CSS

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anirudh-hegde/sim-matrix.git
   cd sim-matrix

2. Install project dependencies using npm:
   ```bash
   npm install
   ```
   
3. Run the project:
   ```bash
   npm run dev
   ```
Open [https://localhost:5366](https://localhost:5366)

Also you can checkout Docker image on DockerHub: [simmatrix](https://hub.docker.com/repository/docker/anirudh06/simmatrix/general)
### Steps to run the Docker image:
1. Pull the image from Dockerhub:
```bash
  docker pull anirudh06/simmatrix:v1
```
2. Run the image:
```bash
  docker run -d -p 8999:5366 simmatrix:v1
```

## Conclusion
SimMatrix is a straightforward yet powerful tool that simplifies the process of identifying the first mobile carrier assigned to any phone number. Whether for professional or personal use, it delivers reliable and accurate results with minimal effort. With its user-centric design and robust functionality, SimMatrix ensures a hassle-free experience for telecom insights.

