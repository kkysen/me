render *args:
    uv run rendercv render Resume-Khyber-Sen.yaml {{args}}
    ln -sf Resume-Khyber-Sen.html rendercv_output/index.html
    sed -i "s/'s CV/'s Resume/" Resume-Khyber-Sen.md rendercv_output/Resume-Khyber-Sen.html
