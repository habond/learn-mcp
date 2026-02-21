# MCP Learning Guide

**[Start Learning →](https://habond.github.io/learn-mcp/)**

An interactive, hands-on educational guide for learning the Model Context Protocol (MCP). Build your own MCP server from scratch using Python.

## Overview

This guide takes you through 12 lessons across 65 interactive steps, teaching you everything from HTTP fundamentals to building a complete MCP server with tools, resources, and prompts.

**Key Feature**: Each lesson builds upon code from previous lessons. You'll create reusable modules that come together in the capstone project.

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
- **Lesson 3**: JSON-RPC 2.0 Essentials - Build `jsonrpc.py` router module

### Phase 2: MCP Protocol Core (Lessons 4-6)
- **Lesson 4**: The MCP Handshake - Build `mcp_core.py` (imports jsonrpc.py)
- **Lesson 5**: Implementing Tools - Build `tools.py` (imports mcp_core.py)
- **Lesson 6**: Implementing Resources - Build `resources.py` (imports mcp_core.py)

### Phase 3: Transport & Integration (Lessons 7-9)
- **Lesson 7**: STDIO Transport - Build `transports/stdio.py`
- **Lesson 8**: HTTP/SSE Transport - Build `transports/http_sse.py`
- **Lesson 9**: Implementing Prompts - Build `prompts.py`

### Phase 4: Testing & Real-World Usage (Lessons 10-12)
- **Lesson 10**: Building an MCP Client - Connect to your server
- **Lesson 11**: Claude Desktop Integration - Configure and test
- **Lesson 12**: Capstone Project - Assemble all modules into a Notes Server

## Module Architecture

By the end of the course, you'll have built this modular framework:

```
mcp_project/
├── jsonrpc.py              # Lesson 3: JSON-RPC router
├── mcp_core.py             # Lesson 4: MCP server foundation
├── tools.py                # Lesson 5: Tool registry & handlers
├── resources.py            # Lesson 6: Resource registry & handlers
├── prompts.py              # Lesson 9: Prompt registry & handlers
├── transports/
│   ├── __init__.py
│   ├── stdio.py            # Lesson 7: STDIO transport
│   └── http_sse.py         # Lesson 8: HTTP/SSE transport
└── notes_server.py         # Lesson 12: Capstone - combines all modules
```

## Code Block Types

Lessons use two visually distinct code block styles:

- **File-edit blocks** (green border, pencil icon): Code you should write to a file
- **Illustrative blocks** (plain): Examples, output, or explanatory code

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
