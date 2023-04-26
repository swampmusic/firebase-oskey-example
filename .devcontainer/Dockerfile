#
# firebase-oskey-example
# Copyright (c) 2021-2023, OSkey SAS. MIT License.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#

FROM ghcr.io/gp-devenv/gp-firebase-devenv:22.04-18-1

# >>> Force node version 1/2
# Use node version 18.15.0
# There is a incompatibility between Node v18.16.0 and firebase-tools v11
# Comment when this is resolved
ARG NODE_VERSION="v18.15.0"
# <<< Force node version 1/2

# Switch back to root
USER root

# Set firebase-cli
COPY ./firebase-cli /usr/bin
RUN chmod ogu+x /usr/bin/firebase-cli

# Switch back to vscode user
USER vscode

# >>> Force node version 2/2
# Use nvm to instel node version set above
# There is a incompatibility between Node v18.16.0 and firebase-tools v11
# Comment when this is resolved
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install $NODE_VERSION && \
    npm i -g npm@latest
# <<< Force node version 2/2

# Set worksapce
WORKDIR /workspace

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
EXPOSE 80
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19003
EXPOSE 19004
EXPOSE 19005
EXPOSE 19006

ENTRYPOINT ["sudo", "/entrypoint.sh"]

# End
