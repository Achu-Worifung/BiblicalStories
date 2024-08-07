export default function getVersion()
{
    const version = localStorage.getItem('version');
    return version;
}