FROM node:20-slim

# 作業ディレクトリを設定
WORKDIR /workspace

# システムパッケージの更新と必要なツールのインストール
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# nodeユーザーは既に存在するため、作業ディレクトリの所有権を設定
RUN chown -R node:node /workspace

# ユーザーを切り替え（既存のnodeユーザーを使用）
USER node




