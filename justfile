render:
    uv run rendercv render Resume-Khyber-Sen.yaml
    ln -sf Resume-Khyber-Sen.html rendercv_output/index.html
    sed -i "s/'s CV/'s Resume/" Resume-Khyber-Sen.md rendercv_output/Resume-Khyber-Sen.html
