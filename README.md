# MCP Learning Guide

An interactive, hands-on educational guide for learning the Model Context Protocol (MCP). Build your own MCP server from scratch using Python.

## Overview

This guide takes you through 12 lessons across 65 interactive steps, teaching you everything from HTTP fundamentals to building a complete MCP server with tools, resources, and prompts.

## Getting Started

Open the guide in your browser:

```bash
open docs/index.html
```

Or serve it locally:

```bash
cd docs
python -m http.server 8000
# Then visit http://localhost:8000
```

## Curriculum

### Phase 1: Foundations (Lessons 1-3)
- **Lesson 1**: Understanding MCP - What MCP is and core concepts
- **Lesson 2**: Your First HTTP Server - Building with Python's http.server
- **Lesson 3**: JSON-RPC 2.0 Essentials - The protocol underlying MCP

### Phase 2: MCP Protocol Core (Lessons 4-6)
- **Lesson 4**: The MCP Handshake - Initialize and capability negotiation
- **Lesson 5**: Implementing Tools - Model-controlled functions
- **Lesson 6**: Implementing Resources - Application-controlled data

### Phase 3: Transport & Integration (Lessons 7-9)
- **Lesson 7**: STDIO Transport - stdin/stdout communication
- **Lesson 8**: HTTP/SSE Transport - Server-Sent Events
- **Lesson 9**: Implementing Prompts - User-controlled templates

### Phase 4: Testing & Real-World Usage (Lessons 10-12)
- **Lesson 10**: Building an MCP Client - Connect to your server
- **Lesson 11**: Claude Desktop Integration - Configure and test
- **Lesson 12**: Capstone Project - Build a complete MCP server

## Prerequisites

- Python 3.10+
- Basic Python knowledge
- A terminal/command line
- A modern web browser

## Features

- Step-by-step interactive lessons
- Copy-paste Python code examples
- Progress tracking (saved in browser)
- Mobile-responsive design
- Keyboard navigation (Alt + Arrow keys)

## Project Structure

```
docs/
├── index.html              # Landing page
├── assets/
│   ├── style.css           # Styling
│   ├── script.js           # Navigation & interactivity
│   └── favicon.svg         # Site icon
└── lessons/
    ├── lesson-01.html      # Lesson files
    ├── lesson-01-2.html
    └── ... (65 files total)
```

## Tech Stack

- Pure HTML, CSS, JavaScript (no build system)
- Python standard library only for server code
- Highlight.js for syntax highlighting

## License

MIT
