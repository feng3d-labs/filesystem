import { ok } from 'assert';
import { pathUtils } from '../src';

describe('PathUtils', () =>
{
    it('basename', () =>
    {
        ok(pathUtils.basename('a') === 'a');
        ok(pathUtils.basename('a.txt') === 'a.txt');
        ok(pathUtils.basename('a/') === 'a');
        ok(pathUtils.basename('a.b/') === 'a.b');
    });

    it('extname', () =>
    {
        ok(pathUtils.extname('a.txt') === '.txt');
        ok(pathUtils.extname('a') === '');
        ok(pathUtils.extname('a.b/b') === '');
        ok(pathUtils.extname('a.b/b.txt') === '.txt');
        ok(pathUtils.extname('a.b/.txt') === '.txt');
    });

    it('dirname', () =>
    {
        ok(pathUtils.dirname('a/a.txt') === 'a');
        ok(pathUtils.dirname('a/b') === 'a');
        ok(pathUtils.dirname('a/b/') === 'a');
    });

    it('isDirectory', () =>
    {
        ok(pathUtils.isDirectory('a/a.txt') === false);
        ok(pathUtils.isDirectory('a/b') === false);
        ok(pathUtils.isDirectory('a/b/') === true);
    });

    it('getDirDepth', () =>
    {
        ok(pathUtils.getDirDepth('a') === 0);
        ok(pathUtils.getDirDepth('a/') === 0);
        ok(pathUtils.getDirDepth('a/a.txt') === 1);
        ok(pathUtils.getDirDepth('a/b') === 1);
        ok(pathUtils.getDirDepth('a/b/') === 1);
        ok(pathUtils.getDirDepth('a/b/a') === 2);
        ok(pathUtils.getDirDepth('a/b/a/') === 2);
    });
});
