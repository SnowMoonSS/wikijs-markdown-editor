# wikijs-markdown-editor

用AI简单搓了个可视化编辑器，当wikijs完全遵循git仓库的时候会很有用，有bug的话请直接提交issue。不考虑支持其它语言。

基于 [Linuxserver baseimage](https://github.com/linuxserver/docker-baseimage-alpine) 的 WikiJS Markdown Editor Docker 镜像。从 WikiJS 中提取的独立 Markdown 编辑器。

[![Docker Image CI](https://github.com/snowmoonss/wikijs-markdown-editor/actions/workflows/docker-image.yml/badge.svg)](https://github.com/snowmoonss/wikijs-markdown-editor/actions/workflows/docker-image.yml)

## 端口

| 端口 | 用途 |
| --- | --- |
| `8080` | Web 编辑器界面 |

## 快速开始

### Docker Run

```bash
docker run -d \
  --name wikijs-md \
  -p 8080:8080 \
  ghcr.io/snowmoonss/wikijs-markdown-editor:latest
```

### Docker Compose

```yaml
services:
  wikijs-md:
    image: ghcr.io/snowmoonss/wikijs-markdown-editor:latest
    container_name: wikijs-md
    ports:
      - "8080:8080"
```

## 特性

- WikiJS 风格 Markdown 编辑器
- 实时预览
- 语法高亮（Prism.js）
- 数学公式（KaTeX）
- 图表支持（Mermaid、PlantUML）
- 中/英双语界面
- Material Design 暗色/亮色主题
