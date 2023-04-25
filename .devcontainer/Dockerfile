#
# firebase-oskey-example
# Copyright (c) 2021-2023, OSkey SAS. MIT License.
#

FROM ghcr.io/gp-devenv/gp-firebase-devenv:22.04-18-1

# Switch back to root
USER root

# Set firebase-cli
COPY ./firebase-cli /usr/bin
RUN chmod ogu+x /usr/bin/firebase-cli

# Switch back to vscode user
USER vscode

# Set worksapce
WORKDIR /workspace

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
# EXPOSE 1883
EXPOSE 80
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19003
EXPOSE 19004
EXPOSE 19005
EXPOSE 19006
EXPOSE 19007

ENTRYPOINT ["sudo", "/entrypoint.sh"]

# End
