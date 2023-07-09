const commands: Map<string, string> = new Map<string, string>();

commands.set("motd", motdText());
commands.set("whoami", "root");
commands.set("touch", "No touch!");
commands.set("rm", "Need permission above super user LMFAO");
commands.set("cat", "Here's a cute cat for you! 😊");
commands.set("about", aboutText());
commands.set("pwd", "/");
commands.set("date", new Date().toLocaleString());
commands.set("kali", kaliLogo());
commands.set("ls", "Don't have any folder rn, back to help for more information");
commands.set("github", openLink("https://github.com/zake1god"));
commands.set("linkedin", openLink("https://www.linkedin.com/in/zaki-zarkasih-95ab31197"));
commands.set("repo", openLink("https://github.com/zake1god/zake1god.github.io"));

commands.set(
  "socials",
  "Usage: [command]<br><br>github, linkedin"
);
commands.set("help", helpText());

export const getCommandByName = (name: string): string => {
  name = name.trim().toLowerCase().split(" ")[0];

  // commands that require redirecting
  switch (name) {
    case "github":
      window.open("https://github.com/zake1god", "_blank");
      break;
    case "repo":
      window.open("https://github.com/zake1god/zake1god.github.io", "_blank");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/zaki-zarkasih-95ab31197/", "_blank");
      break;
    case "cat":
      window.open("https://cataas.com/cat/cute", "_blank");
      break;
  }

  return commands.get(name) || `${name}: command not found`;
};

export const getCommandNames = (): string[] => {
  const commandNames: string[] = ["clear"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return commandNames.sort();
};

export function motdText(): string {
  return `
    Welcome to zake1god.github.io!<br>

    <br>&nbsp;* Github: 
    <a class="terminal-link" href="https://github.com/zake1god" target="_blank" rel="noreferrer">
      https://github.com/zake1god
    </a>
    <br>

    <br>&nbsp;* This is only zake1god digital notes, Enjoy.
    <br>&nbsp;* Type 'help' to see the list of available commands.
  `;
}

function helpText(): string {
  const commandNames: string[] = ["clear", "help"];
  for (const entry of Array.from(commands.entries())) {
    commandNames.push(entry[0]);
  }

  return `
    Usage: [command] [options]
    <br>
    <br>

    ${commandNames.sort().join(", ")}
  `;
}

function aboutText(): string {
  return `
    Hello, root!
    <br><br>

    I'm a passionate <span class="terminal-bold">Penetration Testing</span> from <span class="terminal-bold">Indonesia</span>.
    <br>
    Most of the time, I pentest <span class="terminal-bold">Website</span>, but I love <span class="terminal-bold">APK/IOS</span> as well.

    <br><br>
    Mentionable tools I use on a daily basis:
    <br>
    &nbsp; * <span class="terminal-bold">Website</span>: Mozilla Firefox, Burpsuite
    <br>
    &nbsp; * <span class="terminal-bold">Network</span>: Wireshark, Nmap, Metasploit, Ettercap
    <br>
    &nbsp; * <span class="terminal-bold">Top Favorite Exploit</span>: Cross Site Scripting (XSS)
    <br><br>

    Would you like to connect with me? Enter the 'socials' command!
  `;
}

function openLink(link: string): string {
  return `
    Redirecting to 
      <a class="terminal-link" href="${link}" target="_blank" rel="noreferrer">
        ${link}</a>...
    `;
}

function kaliLogo() {
  return `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replaceAll(" ", "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replaceAll(" ", "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replaceAll(" ", "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replaceAll(" ", "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                     ;XO,".replaceAll(" ", "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replaceAll(
        " ",
        "&nbsp;"
      )}</span>
    </span>
  `;
}

